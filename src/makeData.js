import {base_api} from './services/api'

//>>>>>>>>>ORIGINAL>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const newPerson = () => {
//   const statusChance = Math.random()
//   return {
//     firstName: namor.generate({ words: 1, numbers: 0 }),
//     lastName: namor.generate({ words: 1, numbers: 0 }),
//     age: Math.floor(Math.random() * 30),
//     visits: Math.floor(Math.random() * 100),
//     progress: Math.floor(Math.random() * 100),
//     status:
//       statusChance > 0.66
//         ? 'relationship'
//         : statusChance > 0.33
//         ? 'complicated'
//         : 'single',
//   }
// }

//>>>>>>>>>ORIGINAL>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// export default function makeData(...lens) { //recebe 20
//   const makeDataLevel = (depth = 0) => {
//     const len = lens[depth]
//     return range(len).map(d => {
//       console.log({...newPerson()})
//       return {
//         ...newPerson(),
//         subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
//       }
//     })
//   }


export default function MakeData(props) { //recebe 20
  //console.log(props)
  const makeDataLevel = () => {

    return props.map((value) => {

      return {
        ...value
      }
    })
  }

  return makeDataLevel()
}
