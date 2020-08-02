const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema }= require('graphql')
const axios = require('axios')

//workout type 

const WorkoutType = new GraphQLObjectType({
    name: 'Workout',
    fields: () => ({
        workout_day: { type: GraphQLString },
        workout_type: { type: GraphQLString },
        workout_duration: { type: GraphQLString },
        workout_location_lat: { type: GraphQLString }, 
        workout_location_lon: { type: GraphQLString }
    })

});  


//root query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        exercises: {
            type: new GraphQLList(WorkoutType),
            resolve(parent, args){
                return axios.get('http://localhost:5005/api/workouts/')
                .then(res => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema ({
    query: RootQuery
})