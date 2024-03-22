import { UserRepository } from "../repository/index.js";

class UserService {
   constructor(){
    this.userRespository = new UserRepository();
   }

   async signup(data) {
         try {
            const user = await this.userRespository.create(data);
            return user;

         } catch (error) {
            throw error;
         }
   }
}


export default UserService;