try {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Holiday Nightmares",
      body: "When Iwas kidnapped in the Scotland...",
      userId: 100,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("There was a problem with the API");
  }

  const data = await response.json();

  console.log(data);
} catch (err) {
  // throw new Error('this is an error')
  console.log(err);
}
// finally{
//     console.log("operation completed")
// }
