import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Ahihii';
  student = {
    name: 'Huy',
    age: '20',
    phone: '0123456789',
    email: 'abc@gmail.com',
    img: 'https://static.bongda24h.vn/medias/standard/2022/3/9/bayern-munich-1.jpg'
};

  students = [
  
  { id: 1,
    name: 'Huy',
    age: 18,
    phone: '023456789',
    email: 'asdkhsad@gmail.com',
    img: 'https://static.bongda24h.vn/medias/standard/2022/3/9/bayern-munich-1.jpg'
},
  { id: 2,
    name: 'Hải',
    age: 20,
    phone: '180',
    email: 'qwuoinzxkjan@gmail.com',
    img: 'https://static.bongda24h.vn/medias/standard/2022/3/9/bayern-munich-1.jpg'
},
  { id: 3,
    name: 'Hùng',
    age: 17,
    phone: '170',
    email: 'aghoqnzvxkj@gamil.com',
    img: 'https://static.bongda24h.vn/medias/standard/2022/3/9/bayern-munich-1.jpg'
}];

remove(id : number){
    // return this.users = this.users.filter(user => user.id !== id); 

    // let list = this.students.find(student =>  student.id === id); // student.phone < 10 &&
    // // if(list){
    // //   alert("Không thể xóa");
    // //   return this.students;
    // // }
    // // else {
    //   return 
    this.filterStudents = this.filterStudents.filter(student => student.id !== id);
    // }
  }
// search
searchValue = '';

//spread
filterStudents = this.students;


onSearch(event: any)  {
  this.searchValue = event.target.value;
  //  nếu gần cho chỉnh this.student thí sau khi filter mảng gốc sẽ thay đổi, xóa filter sẽ k trả về kq nữa

  // Gần phần hiển thị cho 1 mảng mới
  // Sử dụng mảng gốc để filter
  this.filterStudents = this.students.filter(student => {
    const studentNameLowerCase = this.student.name.toLowerCase();
    const searchValueLowerCase = this.searchValue.toLowerCase().trim();
  

  return studentNameLowerCase.indexOf(searchValueLowerCase) !== -1
  })
}

// Form input
newUser = {
  id: 0,
  name: '',
  age: 0,
  phone: '',
  email: '',
  img: ''
};

onChangeInput(event: any, key: string) {
  const inputValue = event.target.value;

  this.newUser = {
    ...this.newUser,
    [key]: inputValue
  };

  console.log(this.newUser);
// this.newUser
//   {
//     name: '',
//     phone: '',
//     email: '',
//     img: ''

//     // [key]: inputValue, nếu key là 'name' tường đưogn với name: inputValue
//   }
}

onSubmit() {
if(!this.onValidate(this.newUser)) {
  return
}

if(this.newUser.id){
    for(let i = 0; i < this.students.length; i++) {
        if(this.students[i].id == this.newUser.id) {
            this.students[i] = this.newUser;
        }
    }
}else{
  this.newUser = { ...this.newUser, id: this.students.length + 1, age: Number(this.newUser.age)  };

  this.students.push(this.newUser);

  console.log(this.students, this.filterStudents)
}
  this.newUser = {
    id: 0,
    name: '',
    age: 0,
    phone: '',
    email: '',
    img: ''
  }
}

onValidate(obj :any) {
  if(!obj.name || !obj.phone || !obj.img || !obj.email) {
    return false;
  }

  return true;
}

onEdit(student :any) {
  this.newUser = student;
}

}

