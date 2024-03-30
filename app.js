const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRwD6u_4K6Bdhi_cboRenXR3MtnX9IFson9exLji6wF1Ny-J0ysUu6dBNTdT4MDEDEEEKRHvGcUc_BU/pub?gid=0&single=true&output=csv';


// Function to fetch the CSV file
const fetchCSV = async () => {
 try {
   const response = await fetch(csvUrl);
   if (!response.ok) {
     throw new Error('Failed to fetch CSV');
   }
   const csvData = await response.text();
  
   // Process the CSV data here (e.g., parse it, display it, etc.)
   process(csvData);
   // Now you can work with the CSV data as needed
  
 } catch (error) {
   console.error('Error fetching CSV:', error);
 }
};


function process(csvData) {
   rowsSplit = csvData.split("\n")
   for (let i = 0; i < rowsSplit.length; i++) {
    let imageLinks = rowsSplit[i].split(",")
    part1.appendComponent(new Component("image", imageLinks[0]))
    part1.appendComponent(new Component("spacer", 1))
    
    part2.appendComponent(new Component("image", imageLinks[1]))
    part2.appendComponent(new Component("spacer", 1))
    
    part3.appendComponent(new Component("image", imageLinks[2]))
    part3.appendComponent(new Component("spacer", 1))
   }
}
fetchCSV()

const fetchDoc = async () => {
  try {
    const response = await fetch("https://docs.google.com/document/d/e/2PACX-1vSROV7uCk3qAoEXN3ch71UuObKbKnDkBwt-9slbMnU3whsE8hLizA211MCaWhwEpSAjhmA4S0STnLW5/pub");
    if (!response.ok) {
      throw new Error('Failed to fetch DOC');
    }
    const docData = await response.text();
   
    // Process the DOC data here (e.g., parse it, display it, etc.)
    process2(docData);
    // Now you can work with the DOC data as needed
   
  } catch (error) {
    console.error('Error fetching DOC:', error);
  }
 };
 
 
function process2(docData) {
  console.log(docData)
  test = document.createElement("div")
  test.innerHTML = docData
  descComp.div.appendChild(test.getElementsByClassName("doc-content")[0])
}
fetchDoc()

Lenoir.setSections(28)

var part1 = new Part(1, 8)
var part2 = new Part(10, 8)
var part3 = new Part(19, 8)
// HOME
function home() {
    let headingContent = new Section()
    let title = new Part(9, 10)
    title.appendComponent(new Component("spacer", 1))
    title.appendComponent(new Component("header", "Work", 1))
    title.appendComponent(new Component("spacer", 1))
    headingContent.appendPart(title)
    headingContent.compile()

    let landing = new Page("The work of Juhi Bhatt", headingContent, "title")

    let section = new Section("start")
    section.appendPart(part1)
    section.appendPart(part2)
    section.appendPart(part3)
    section.compile()
    landing.appendSection(section)

    Lenoir.registerPage("Work", landing, "index.html")
}
home()

var descComp = new Component("raw", "")
function about() {
    let headingContent = new Section()
    let title = new Part(9, 10)
    title.appendComponent(new Component("spacer", 1))
    title.appendComponent(new Component("header", "About", 1))
    title.appendComponent(new Component("spacer", 1))
    headingContent.appendPart(title)
    headingContent.compile()

    let about = new Page("About Juhi Bhatt.", headingContent, "title")

    // ultra(about, LenoirPrebuilts.markdown(`Hi there! I am ***artist***.`, 2, 24))
    let desc = new Section()
    let descCont = new Part(2, 24)
    descCont.appendComponent(descComp)
    desc.appendPart(descCont)
    desc.compile()
    about.appendSection(desc)

    Lenoir.registerPage("About", about, "about.html")
}
about()

Lenoir.load("Juhi Bhatt", "icon.ico", false)
// Lenoir.bake("Lenoir")
