import { FormPage } from "../pageObjects/form.page"

describe('Automation practice form filling', () => {
  it('Fill and submit form', () => {
    FormPage.visit();

    // simple inputs
    FormPage.firstNameInput.type("Steven");
    FormPage.lastNameInput.type("Beaven");
    FormPage.emailInput.type("steven@email.net");
    FormPage.findGenderBtnByName("Male").click();
    FormPage.mobileInput.type("2211221122");

    // set birth date
    FormPage.birthdateInput.click(); // display datepicker
    FormPage.birthYearSelect.select("1930");
    FormPage.birthMonthSelect.select("February");
    FormPage.findDayBtnFor("28").click();

    // set subjects
    FormPage.subjectsInput.type("Economics");
    FormPage.topSubjectOption.click();

    // hobbies
    FormPage.findHobbyBtnByName("Music").click();

    // image upload
    FormPage.pictureChoose.selectFile("files/testimage.jpg");

    // address, state, city
    FormPage.addressField.type("Real Avenue 321");
    FormPage.stateSelect.click();
    FormPage.findStateInSelect("NCR").click();
    FormPage.citySelect.click();
    FormPage.findCityInSelect("Delhi").click();

    FormPage.submitBtn.click();

    // validate resulting table values
    FormPage.tableValueOf("Student Name").should("contain.text", "Steven Beaven");
    FormPage.tableValueOf("Student Email").should("contain.text", "steven@email.net");
    FormPage.tableValueOf("Gender").should("contain.text", "Male");
    FormPage.tableValueOf("Mobile").should("contain.text", "2211221122");
    FormPage.tableValueOf("Date of Birth").should("contain.text", "28 February,1930");
    FormPage.tableValueOf("Subjects").should("contain.text", "Economics");
    FormPage.tableValueOf("Hobbies").should("contain.text", "Music");
    FormPage.tableValueOf("Picture").should("contain.text", "testimage.jpg");
    FormPage.tableValueOf("Address").should("contain.text", "Real Avenue 321");
    FormPage.tableValueOf("State and City").should("contain.text", "NCR Delhi");
  })
})