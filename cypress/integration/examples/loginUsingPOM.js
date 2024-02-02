import login from "../../PageObjects/Orangehrmlive/login";
describe("login", function(){
    before(function(){
        cy.fixture('orangehrm').then(function(data){
            this.data = data
        })
    })
    it("loginpage", function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        const ln = new login();
        ln.setUsername(this.data.username);
        ln.setPassword(this.data.password);
        ln.clickLogin();
        ln.veriyLogin();
    })        
})