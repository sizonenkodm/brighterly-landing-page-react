import { useState } from 'react';
import styles from './Form.module.scss';

import { gradeOptions } from 'helpers/selectsOptions';
import Select from 'UI/Select';
import Input from 'UI/Input';
import Button from 'UI/Button';

const Form = () => {
    const [grade, setGrade] = useState(gradeOptions[0].value);
    const [email, setEmail] = useState('');

    const clickHandler = (event) => {

        // This function for future functionality with API connection

        event.preventDefault();

        const clientsInfomation = {
            grade,
            email
        };

        setTimeout(() => {
            setGrade(gradeOptions[0].value);
            setEmail('');
        }, 1000);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    return (
        <form className={styles["info__card-form"]}>
            <Select
                options={gradeOptions}
                sort={grade}
                setSort={setGrade}
                id='gradeID'
                label='Kid’s grade'
            />
            <Input
                type='email'
                placeholder='marie.flores134@gmail.com'
                value={email}
                handler={emailHandler}
                id='emailID'
                label='Parent’s email'
            />
            <Button
                classProp={styles['form__btn']}
                text='Get a lesson'
                handler={clickHandler}
            />
        </form>
    );
};

export default Form;