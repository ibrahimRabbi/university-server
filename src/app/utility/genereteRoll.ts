import { SemesterInterface } from "../modules/semester/semester.interface";
import { userModel } from "../modules/users/user.model";
 
 
const genereteRoll = (semeterData: SemesterInterface) => {
    
    
    const initial = (0).toString().padStart(4, '0')
     
    const convertNumber = parseInt(initial) + 1
   const currentId = convertNumber.toString().padStart(4,'0')
     const year = semeterData.year.getFullYear()
     const semeterCode = semeterData.code

    return `${year}${semeterCode}${currentId}`
};

export default genereteRoll;