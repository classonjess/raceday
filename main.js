let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true;
let runnerAge = 16;

if (earlyRegister === true && runnerAge > 18) {
  console.log(raceNumber + 1000);
}

if ( runnerAge > 18 && earlyRegister === true){
  console.log(`Start time for all Adults, who had registered early, start at 09:30am. ${raceNumber} `);
} else if (runnerAge > 18 && !earlyRegister){
  console.log(` If runner is over 18 and did not register early they will race at 11:00am ${raceNumber}`);
  } else if( runnerAge < 18){
    console.log(`All youth registrants run at 12:30pm (regardless of registration). ${raceNumber}`);
  } else( runnerAge === 18)
    console.log(`Please see registration.`);
  
