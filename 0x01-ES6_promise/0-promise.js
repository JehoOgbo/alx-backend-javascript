export default function() {
  const promise = new Promise((resolve, reject) => {
    resolve("Success!");
});
  return promise;
};
