// const email = document.getElementsByClassName("socialmedia__email-copy")[0]
//   .innerHTML;

// async function copyContent() {
//   try {
//     await navigator.clipboard.writeText(email);
//     console.log("Copied to clipboard");
//   } catch (err) {
//     console.error("Failed to copy: ", err);
//   }
// }

const btnEmail = document.querySelector(".socialmedia__email-copy");
const emailText = btnEmail.innerHTML;

// console.log(btnEmail, emailText);

// btnEmail.addEventListener("click", () => {
//   navigator.clipboard
//     .writeText(emailText)
//     .then(() => {
//       alert("Email address copied to clipboard: " + emailText);
//     })
//     .catch((e) => {
//       alert("Failed to copy email: " + e);
//     });
// });
