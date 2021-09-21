interface User {
    name: string;
    id: number;
  }
   
  class UserAccount {
    name: string;
    id: number;

    display():void{
        console.log("Username:"+this.name);
        console.log("Number:"+this.id);
    }
  }
   
  const user = new UserAccount();
  user.id = 2;
  user.name = "Sathwika";
  user.display();
