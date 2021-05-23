import React from "react";
import {InputTextField, PrimaryButton} from "../../components";

export const Todo = () => {
    return (
        <div className={'c-section-container'}>
          <h2>TOTO LIST</h2>
          <InputTextField label={'Title'} multiline={true} fullWidth={true} required={true} type={'text'} />
          <InputTextField label={'Details column'} multiline={true} fullWidth={true} required={false} type={'text'} />
          <div className={'module-spacer--medium'}></div>
          <PrimaryButton label={'Add Todo'} />
        </div>
    )
}