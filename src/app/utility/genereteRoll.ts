import { SemesterInterface } from "../modules/semester/semester.interface";
import { userModel } from "../modules/users/user.model";





const genereteRoll = async (semeterData: SemesterInterface) => {

  const allData = await userModel.findOne({ role: 'student' }).sort({ createdAt: -1 })


  let previousRoll = allData?.studentRoll.substring(6)

  const initial = previousRoll || (0).toString().padStart(4, '0')
  const incriment = parseInt(initial) + 1

  const currentId = incriment.toString().padStart(4, '0')
  const year = semeterData.year.getFullYear()
  const semeterCode = semeterData.code

  return `${year}${semeterCode}${currentId}`
};

export default genereteRoll;




//way 2
// if (allData) {
//   generetedRoll = (parseInt(generetedRoll) + 1).toString()
// } else {
//   generetedRoll = generetedRoll
// }