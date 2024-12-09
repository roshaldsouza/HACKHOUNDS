import React, { useState } from 'react';
import { Box, Typography, Button, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';

const SelfAssessment = () => {
  const [responses, setResponses] = useState({
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0,
    q6: 0,
    q7: 0,
    q8: 0,
    q9: 0,
  });

  const handleChange = (e) => {
    setResponses({
      ...responses,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const calculateScore = () => {
    const totalScore = Object.values(responses).reduce((acc, val) => acc + val, 0);

    let severity;
    if (totalScore <= 4) {
      severity = 'Minimal or none';
    } else if (totalScore <= 9) {
      severity = 'Mild depression';
    } else if (totalScore <= 14) {
      severity = 'Moderate depression';
    } else if (totalScore <= 19) {
      severity = 'Moderately severe depression';
    } else {
      severity = 'Severe depression';
    }

    return { totalScore, severity };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { totalScore, severity } = calculateScore();
    alert(`Total Score: ${totalScore}\nSeverity: ${severity}`);
  };

  return (
    <Box
      sx={{
        width: '600px',
        margin: '50px auto',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h5" gutterBottom>
        PHQ-9 Depression Self-Assessment
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">1. Little interest or pleasure in doing things?</FormLabel>
          <RadioGroup
            row
            name="q1"
            value={responses.q1}
            onChange={handleChange}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">2. Feeling down, depressed, or hopeless?</FormLabel>
          <RadioGroup
            row
            name="q2"
            value={responses.q2}
            onChange={handleChange}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">3. Trouble falling or staying asleep, or sleeping too much?</FormLabel>
          <RadioGroup
            row
            name="q3"
            value={responses.q3}
            onChange={handleChange}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">4. Feeling tired or having little energy?</FormLabel>
          <RadioGroup
            row
            name="q4"
            value={responses.q4}
            onChange={handleChange}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">5. Poor appetite or overeating?</FormLabel>
          <RadioGroup
            row
            name="q5"
            value={responses.q5}
            onChange={handleChange}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">6. Feeling bad about yourself — or that you are a failure or have let yourself or your family down?</FormLabel>
          <RadioGroup
            row
            name="q6"
            value={responses.q6}
            onChange={handleChange}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">7. Trouble concentrating on things, such as reading the newspaper or watching television?</FormLabel>
          <RadioGroup
            row
            name="q7"
            value={responses.q7}
            onChange={handleChange}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">8. Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual?</FormLabel>
          <RadioGroup
            row
            name="q8"
            value={responses.q8}
            onChange={handleChange}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">9. Thoughts that you would be better off dead, or of hurting yourself in some way?</FormLabel>
          <RadioGroup
            row
            name="q9"
            value={responses.q9}
            onChange={handleChange}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          sx={{ marginTop: '20px' }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default SelfAssessment;
