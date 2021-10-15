
const setter = (set, e) => {
    set(e.target.value);
};

const tokenHeaders = () =>{
    const token = localStorage.getItem("jwt");
    return {Authorization: "Bearer " + token}
}

module.exports = {
    setter,
    tokenHeaders
};