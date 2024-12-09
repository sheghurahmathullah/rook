import { useState } from 'react';
import styles from './CollectionForm.module.css';
import supabase from '@/lib/utils/supabase';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

async function pushToSupabase(data) {
  const { error } = await supabase.from('collection').insert(data);
  if (error) {
    console.error('Error inserting data:', error)
    return
  }
}

const handleInputChange = (e) => {
    const value = e.target.value;
    // Regular expression to match only digits
    const regex = /^[0-9]*$/;

    if (regex.test(value)) {
      // If the input contains only digits, update the state
      setInputValue(value);
    }
  };

function Field({name, type, value, onChange}) {
  return (
    <div className={styles.field}>
      <input value={value} onChange={onChange} type={"text"} name={camelize(name)} required />
      <label htmlFor={camelize(name)}>{name}</label>
    </div>
  )

}

export default function CollectionForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [lookingFor, setLookingFor] = useState('')
  const [budget, setBudget] = useState('')
  const [companyDescription, setCompanyDescription] = useState('')


  const handleSubmit = async () => {
    const data = {
      name,
      email,
      companyName,
      phoneNumber,
      lookingFor,
      budget,
      companyDescription
    }

    const { error } = await supabase.from('Submissions').insert(data);
    if (error) {
      console.error('Error inserting data:', error)
      return
    }

    setName('')
    setEmail('')
    setCompanyName('')
    setPhoneNumber('')
    setLookingFor('')
    setBudget('')
    setCompanyDescription('')

    alert('Form submitted successfully!')

  }


  return (
    <div className={styles.form}>
      <div className={styles.row}>
        <Field name="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Field name="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={styles.row}>
        <Field name="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        <PhoneInput placeHolder="Phone Number"  value={phoneNumber} onChange={setPhoneNumber} className={styles.field}/>
        {/* <Field name="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /> */}
      </div>
      <div className={styles.row}>
        <Field name="What service are you looking for?" value={lookingFor} onChange={(e) => setLookingFor(e.target.value)} />
        <Field name="What's your budget? (in USD)" value={budget} onChange={(e) => setBudget(e.target.value)} />
      </div>
      <Field name="What would you describe your company as?" value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)} />

      <button className='wc-btn-dark' type="submit" onClick={() => handleSubmit()}>
        Submit →
      </button>
    </div>   
  )
}