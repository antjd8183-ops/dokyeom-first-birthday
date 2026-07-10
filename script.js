// 계좌번호 복사
function copyAccount() {

    const account = "3333-04-3156182";

    navigator.clipboard.writeText(account)
    .then(() => {
        alert("계좌번호가 복사되었습니다. 🤎");
    })
    .catch(() => {
        prompt("복사되지 않았습니다. 아래 계좌번호를 복사해주세요.", account);
    });

}

// 스크롤 애니메이션
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="all .8s ease";

    observer.observe(section);

});
