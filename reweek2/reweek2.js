



var student=0
var numberOfStudents;
function addStudent(){
	student++
	numberOfStudents = array.length
	return numberOfStudents;
}

function getNumberOfStudents(){
	return student;
}

function studentsName(name){
	var students = [];
	return student.push(name);

}
function clearStudents(){
	student = 0
	students=[]
}

function createFullName(firstName, lastName) {
      
      return firstName + " "+lastName;

}


function getStudentByInitials(name, initial) {
     
     if (name[0]===initial){
       return true;
     }
       return false;

}

function isFullName(name) {
     
    if(name.split(" ").length === 2 ){
       return true ;
    } 
      return false ;
}

