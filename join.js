const form = document.getElementById("form")

form.addEventListener("submit", function(event){
    event.preventDefault() // 기존기능차단

    let userId =event.target.id.value
    let userPw1 = event.target.pw1.value
    let userPw2 = event.target.pw2.value
    let userName = event.target.name.value
    let userPhone = event.target.phone.value
    let userPosition = event.target.position.value
    let userGender = event.target.gender.value
    let userEmail = event.target.email.value
    let userIntro = event.target.introduce.value

    if(userId.length < 5) {
        alert("아이디가 너무 짧습니다. 5자 이상 입력헤주세요.")
        return
    }
    if(userPw1 !== userPw2) {
        alert("비밀번호가 일치하지 않습니다.")
        return
    }
    document.body.innerHTML = "" //비우기
    const h1 = document.createElement("h1")
    h1.innerHTML=`<p>🤓 ${userId} 님, 가입을 환영합니다!🥳</p>`
    document.body.appendChild(h1)
})