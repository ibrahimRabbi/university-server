import { SemesterInterface } from "../modules/semester/semester.interface";
import { userModel } from "../modules/users/user.model";





const genereteRoll = async (semeterData: SemesterInterface | any) => {

  const allData = await userModel.findOne({ role: 'student' }).sort({ createdAt: -1 })

  let previousRoll = allData?.rollId.substring(6)
  const previousSemesterCode = allData?.rollId.substring(4, 6)
  let currentSemesterCode = semeterData.code
  const year = semeterData.year.getFullYear()
  let initial = previousRoll || (0).toString()
  

  if (previousSemesterCode !== currentSemesterCode) {
     initial = (0).toString()
  }  

  const incriment = parseInt(initial) + 1
  const currentId = incriment.toString().padStart(4, '0')
 
  return `${year}${currentSemesterCode}${currentId}`

  
};

export default genereteRoll;




//way 2
// if (allData) {
//   generetedRoll = (parseInt(generetedRoll) + 1).toString()
// } else {
//   generetedRoll = generetedRoll
// }