import React, { useEffect } from 'react';
import styles from './NotFoundPage.module.css'
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
	const navigate = useNavigate();

	// Redirect to home page after a delay
	useEffect(() => {
		const redirectTimeout = setTimeout(() => {
			navigate('/');
		}, 5000); // Redirect after 5 seconds (adjust as needed)

	return () => clearTimeout(redirectTimeout); // Cleanup function
	}, [navigate]);

	return (
		<div className={styles.container}>
			<p className={styles.head}>404 - Page Not Found</p>
			<p className={styles.message}>Ṫ̴̛̛̛͎̳̫̪͈̬͍̯̖̪̈̑́͆̀̓̆̍͊̐̕h̶̛̞͗̈́͒̚e̸̦̲͐̏̔̾͘̕͝͠ ̴͉̥̤̾̈́͋̑̒̿̕p̷͉͔͇̙̦͇͕̈a̶̧͎̝̘̘̱͇̭̪̻̍͗̉̈͒̉̎̀g̶͈̺̯̳̼͙̜̪̙̟̎̊̄͂ͅͅë̵̡̛͐̆̋ ̶̣̙̱̈́͑̑͗̕͠y̶̯̬̥̘͍̳̐̒̈́̀̐̀͑̓̈́̎̓̂̎ö̶͈́̓̊́̉͋̐͆ù̷͚̣͎̝͉͕̯̤̲͒͗̓͊̉̅͠r̸͙͍͔͇̞̣̝̺̹͚̄̔̿͑̎̄̿̏̆͆́͑́̕ ̷̧̧̯͇͈̻̣̮̻̗̘̤̺͎͓̊̉͑̽̉ḻ̸̨͔̳͔̝̬̞̖̆͐͋͋̀̚̚̚o̴̮̻̺̙̘̰̗͕̘̜̽̇̈́o̶̡̧̢̘̠̗̺̳͊͐ķ̸͎̦̰̭̩̦͐̽̂̌́̾̄i̵̙͕͕̟͉̗̤̘͓̫͋͑̂͆̇͊̕͠ņ̶̢̣̑̾̒ġ̴̳̹̹̀̓̓́̿̂̀̈͗͑͝͝͝ ̸͖̘̼̹͔̪̳̞̝͍͎̿̉̔̈́͆̑͘͜͝f̴̡̙̪̘͆̀o̴̧̻͖̞͍̝̜͔͕̤͖̜̯̽̂̏͜r̵̟̪̫͇̙͚̼͍͐̍̑̄̉͒̚͝ ̸̡̨̜̝̹̩̫̤̝͔̟̪̋̓̿͑̚͜c̸͙̹̙̃̓o̵̧̧͓͙͉͚͊̈́͛́̌͜͜ͅų̴̝͇͍̤̰̘̗͚̺͎̖̋̏̊̐͜ͅͅl̴̡̧̙̪̤̠̼͙͖̻̩̪̤͔̿̐̏d̵͍̖̘̺̦̤̝̖̭̖̖̜̑̔͘ ̴̫̥̫̱͓̼̹͕̿͂n̷̺̹͇͇̖̼̣̝̦͚̠̓́ǫ̶̛̺͙̹͙̓̄͒͐̃̈́̒̑̀͋̇͝͠͠t̵͙̪̮̻̆͑͂̇̍̈̊͊͆͠ ̸̧̮̱̱̥̦̪̫͍̰͈͈͓̼͌͗̑b̴̡̛̛̛̬͕̰̻͇̘̖̩̮̯͙̜̤̌͌͌̊̏̀̍̐̑̆͂͜e̴̱̼̟̬̲̼̱̹͇̠͈̎̑̐̍̽͋͒͛̂͐̕̕͜͠ ̵͇̤̖̺͖̜̒́̀̈͂̽́͛͆̀͛̍́̓͠f̴̨͎̠͖̲͓̺̺͓͚͇̜̞͖̀͒̽̽̈́̀͋͘o̵̻̩̍ȕ̴͙̦̦͔̳̗̘̎͐́͆̍͋́̔͐̚͘ņ̶̧̲͇͙̫̟͇͕̼̄d̵͕̑͛̇͒̓̏̂̏̓̏̒́͘͝.̵̧̢̡̧̤̯̤̘͓̰̤̠̦̺̟͌̓͆̿̐́̈̍̅̊̕</p>
			<img src="/output.png" className={styles.img}/>
		</div>
	);
}

export default NotFoundPage;
