const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema }= require('graphql')
const axios = require('axios')

//workout type 

const WorkoutType = new GraphQLObjectType({
    name: 'Workout',
    fields: () => ({
        workout_day: { type: GraphQLInt },
        workout_type: { type: GraphQLString },
        workout_duration: { type: GraphQLInt },
        workout_location_lat: { type: GraphQLInt }, 
        workout_location_lon: { type: GraphQLInt }
    })

});  


//root query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        exercises: {
            type: new GraphQLList(WorkoutType),
            resolve(parent, args){
                return axios.get('http://localhost:5001/api/items/')
                .then(res => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema ({
    query: RootQuery
})