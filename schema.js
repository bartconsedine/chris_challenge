const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema, GraphQLDate } = require('graphql')
const axios = require('axios')

//workout type 

const WorkoutType = new GraphQLObjectType({
    name: 'Workout',
    fields: () => ({
        _id: { type: GraphQLString },
        workout_day: { type: GraphQLString },
        workout_type: { type: GraphQLString },
        workout_type_0: { type: GraphQLString },
        workout_type_1: { type: GraphQLString },
        workout_type_2: { type: GraphQLString },
        workout_type_3: { type: GraphQLString },
        workout_type_4: { type: GraphQLString },
        workout_duration: { type: GraphQLString },
        workout_location_lat: { type: GraphQLString },
        workout_location_lon: { type: GraphQLString },
        date: { type: GraphQLString }
    })

});


//root query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        exercises: {
            type: new GraphQLList(WorkoutType),
            resolve(parent, args) {
                return axios.get('http://localhost:5005/api/workouts/')
                    .then(res => res.data)
            }
        },
        exercise: {
            type: WorkoutType,
            args: {
                _id: { type: GraphQLString }
            },
            resolve(parent, args) {
                return axios.get(`http://localhost:5005/api/workouts/${args._id}`)
                    .then(res => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})