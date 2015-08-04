//로그인 시도할경우 호출됨.
Accounts.validateLoginAttempt(function(obj){
    var user = obj.user;

    return true;
});


// 사용자명(로그인하는 아이디)를 체크하고 메세지를 보내기
Accounts.validateNewUser(function (user) {

    if (user.username && user.username.length >= 3){
        return true;
    }else{
        throw new Meteor.Error(403, "로그인 아이디는 3자리 이상입니다.");
    }

});

// 메세지 없이 체크만 해보기
Accounts.validateNewUser(function (user) {

    return user.username !== "root";

});