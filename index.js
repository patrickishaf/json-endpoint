const express = require('express');

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

function getWeekdayFromCode(code) {
  const matchingWeeekdayFor = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  }
  return matchingWeeekdayFor[code];
}

app.get('/api', function(req, res) {
  const { slack_name, track } = req.query;
  const date = new Date();
  const weekday = getWeekdayFromCode(date.getDay());
  const utcDateString = date.toISOString();

  res.json({
    slack_name: slack_name ?? "no slack name specified",
    current_day: weekday,
    utc_time: utcDateString,
    track: track ?? "no track specified",
    github_file_url: "https://github.com/patrickishaf/json-endpoint/blob/main/index.js",
    github_repo_url: "https://github.com/patrickishaf/json-endpoint",
    status_code: 200
  });
});

app.listen(PORT, function() {
  console.log('server listening on port ' + PORT);
})