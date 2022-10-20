package step_defs;

import com.digital_nomads.utilities.Driver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class Page_Steps {

    @Given("^User is on \"([^\"]*)\"$")
    public void user_is_on(String url)  {
        Driver.getDriver().get(url);
    }

    @Given("^User is on main page$")
    public void user_is_on_main_page(){
        System.out.println("Test");
    }

    @Given("^User should choose \"([^\"]*)\" value in What are You moving\\? field$")
    public void user_should_choose_value_in_What_are_You_moving_field(String arg1) {
        Assert.assertTrue(true);
    }

    @Given("^User should choose \"([^\"]*)\" value in Move Size field$")
    public void user_should_choose_value_in_Move_Size_field(String arg1) {
        Assert.assertTrue(true);
    }

    @When("^User clicks on Compare Quotes button$")
    public void user_clicks_on_Compare_Quotes_button()  {
        Assert.assertTrue(true);
    }
}
