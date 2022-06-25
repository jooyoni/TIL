
    enum Role{
        ADMIN=1, USER=2
      }
    type NumStr={
        name:string
    };
      interface Props{
        name:string;
        age:NumStr;
      }
      const person:Props= {
        name: 'Maximilian',
        age: {
            name:"df "
        }
      };
      
      console.log(person.age);
      