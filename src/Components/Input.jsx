import useFormInput from "./Hooks/Form";

function Input() {
  const firstNameProps = useFormInput("");
  const lastNameProps = useFormInput("");

  return (
    <div>
      <label>
        First Name :
        <input {...firstNameProps} />
      </label>

      <label>
        Last Name :
        <input {...lastNameProps} />
      </label>

      <p>
        <b>
          Good Morning {firstNameProps.value} {lastNameProps.value}
        </b>
      </p>
    </div>
  );
}

export default Input;
