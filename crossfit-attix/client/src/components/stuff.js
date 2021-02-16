<TextField
              name="strength"
              label="Strength"
              variant="filled"
              value={inputField.strength}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="workout"
              label="Workout"
              variant="filled"
              value={inputField.workout}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="coolDown"
              label="Cooldown"
              variant="filled"
              value={inputField.coolDown}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />