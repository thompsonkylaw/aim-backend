const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
//app.listen(process.env.PORT || 3000, () => console.log('Server running'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});