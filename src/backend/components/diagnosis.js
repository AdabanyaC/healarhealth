const Infermedica = require("infermedica");
/**
 * Provide credentials
 * This reference can help you explore the Infermedica API with your own data.
 * Make sure that your application id and application key are correct and get started.
 * Below they are passed in as environment variables
 */
const infermedica = new Infermedica({
  appId: process.env.APP_ID,
  appKey: process.env.APP_KEY,
});

const context = {
  sex: "male",
  age: 70,
  evidence: [
    {
      id: "s_1193",
      choice_id: "present",
    },
    {
      id: "s_488",
      choice_id: "present",
    },
    {
      id: "s_418",
      choice_id: "present",
    },
  ],
};

infermedica.postTriage(context).then((res) => {
  console.log(res);
});
