const rewire = require("rewire")
const Dashboard = rewire("./Dashboard")
const mapStateToProps = Dashboard.__get__("mapStateToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ project: { projects: [12345, 12345, 12345] } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ project: { projects: ["bc23a9d531064583ace8f67dad60f6bb", 12345, 12] } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ project: { projects: [987650, 12345, "bc23a9d531064583ace8f67dad60f6bb"] } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ project: { projects: [987650, "a1969970175", 12] } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ project: { projects: ["bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb", 12345] } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
