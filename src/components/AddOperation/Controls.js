import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField'

const Controls = ({
                      newIncomeHandler,
                      newCategoryHandler,
                      newDescriptionHandler,
                      newValueHandler,
                      saveTaskToDatabase,
                      income,
                      categoriesInc,
                      category,
                      categoriesExp,
                      description,
                      value

                  }) => (
    <div>
        <RadioButtonGroup
            name="shipSpeed"
            defaultSelected={true}
            onChange={newIncomeHandler}
        >
            <RadioButton
                value={true}
                label="income"

            />
            <RadioButton
                value={false}
                label="expense"

            />
        </RadioButtonGroup>

        {income === true ?
            <SelectField value={category} floatingLabelText="Choose category of your income"
                         fullWidth={true} onChange={newCategoryHandler}>
                {
                    categoriesInc.map((el) => (

                            <MenuItem value={el.name} primaryText={el.name}/>

                        )
                    )}

            </SelectField>
            :
            <SelectField value={category} floatingLabelText="Choose category of your expence"
                         fullWidth={true} onChange={newCategoryHandler}>
                {categoriesExp.map((el) => (

                        <MenuItem value={el.name} primaryText={el.name}/>

                    )
                )}
            </SelectField>

        }


        <Divider/>
        {/*<TextField*/}
        {/*value={date}*/}
        {/*onChange={this.newDateHandler}*/}
        {/*/>*/}
        <TextField
            value={description}
            hintText={"Write description..."}
            fullWidth={true}
            onChange={newDescriptionHandler}
        />
        <Divider/>

        <TextField
            value={value}
            hintText={'Write value of your income or expence...'}
            fullWidth={true}
            type={'number'}
            onChange={newValueHandler}
        />
        <Divider/>
        <RaisedButton
            onClick={saveTaskToDatabase}
            fullWidth={true}
            primary={true}
            label={"SAVE IT!"}
            disabled={value && category ? false : true}
        />
    </div>
)
export default Controls