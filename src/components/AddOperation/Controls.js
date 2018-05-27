import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField'
import FileUploader from 'react-firebase-file-uploader';


const Controls = ({
                      newIncomeHandler,
                      newCategoryHandler,
                      newDescriptionHandler,
                      newValueHandler,
                      saveTaskToDatabase,
                      income,
                      image,
                      newImageHandler,
                      categoriesInc,
                      category,
                      categoriesExp,
                      description,
                      value,
                      storageRef,
                      onUploadStart,
                      onUploadError,
                      onUploadSuccess,
                      onProgress,
                      imageLength,
                      saveIncomeNumberkToDatabase

                  }) => (
    <div>

        <h2>Add new operation</h2>
        <br/>
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

                            <MenuItem value={el.key} primaryText={el.name}/>

                        )
                    )}

            </SelectField>
            :
            <SelectField value={category} floatingLabelText="Choose category of your expence"
                         fullWidth={true} onChange={newCategoryHandler}>
                {categoriesExp.map((el) => (

                        <MenuItem value={el.key} primaryText={el.name}/>

                    )
                )}
            </SelectField>

        }


        <TextField
            value={description}
            hintText={"Write description..."}
            fullWidth={true}
            onChange={newDescriptionHandler}
        />


        <TextField
            value={value}
            hintText={'Write value of your income or expence...'}
            fullWidth={true}
            type={'number'}
            onChange={newValueHandler}
        />

        <br/>
        <br/>
        <label style={{
            marginTop: '16px',
            marginBottom: '2px',
            backgroundColor: '#3aa1ba',
            color: 'white',
            padding: 10,
            borderRadius: 4,
            pointer: 'cursor'
        }}>

            Select picture of your bill
            <FileUploader
                hidden
                accept="image/*"
                name="Your photo"
                randomizeFilename
                storageRef={storageRef}
                onUploadStart={onUploadStart}
                onUploadError={onUploadError}
                onUploadSuccess={onUploadSuccess}
                onProgress={onProgress}
            />
        </label>

        <br/>

        <br/>

        <div>
        {imageLength>0 ? 'We uploaded your image succesfully.' : "You didn't upload image, yet...."}
    </div> <br/>
        <RaisedButton
            onClick={() => {saveTaskToDatabase()
                saveIncomeNumberkToDatabase()}}
            fullWidth={true}
            primary={true}
            label={"SAVE IT!"}
            disabled={value && category ? false : true}
        />
    </div>
)
export default Controls