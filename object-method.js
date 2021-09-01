const student = {
    id:123,
     nameS: 'mostakim',
    subject:'CSE',
    major:'Programming',
    friends: ['anik','ifthekhar','ashiq','shakil'],
    relative:{
        cousin:"abdullah",
        favorite_game:"cricket" 
    },
    nextExam: function () {
        console.log(this.major,"is best interesting thinks");
    },
    lastExam: function () {
        console.log(this.nameS,"is your name");
    }

}
student.lastExam();