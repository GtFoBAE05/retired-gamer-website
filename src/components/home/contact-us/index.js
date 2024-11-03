import {useState} from 'react';
import style from './contact-us.module.css';

export default function ContactUs() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [projectIdeas, setProjectIdeas] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!fullName || !email || !projectIdeas) {
            setError('All fields are required.');
            return;
        }

        setError('');

        console.log('Submitted:', {fullName, email, projectIdeas});
    };

    return (
        <div className={style.contactUsContainer}>
            <div className={style.formBox}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <label htmlFor="fullName" className={style.label}>
                        Full Name:
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        className={style.input}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <label htmlFor="email" className={style.label}>
                        Email Address:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className={style.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="projectIdeas" className={style.label}>
                        Your Outline Project Ideas:
                    </label>
                    <textarea
                        id="projectIdeas"
                        className={style.textarea}
                        rows="6"
                        value={projectIdeas}
                        onChange={(e) => setProjectIdeas(e.target.value)}
                    />
                    {error && <p className={style.error}>{error}</p>}
                    <button type="submit" className={style.button}>
                        Submit
                    </button>
                </form>
            </div>
            <div className={style.contactUsText}>
                <h2>Need help?</h2>
                <h2>Feel free to contact us</h2>
            </div>
        </div>
    );
}
