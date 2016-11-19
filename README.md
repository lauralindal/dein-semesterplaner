# Dein Semesterplaner

Project by Students at HTW Berlin, Winter Semester 2016/17.
This planner is supposed to help students to organize each semester's courses individually.
You can find a Mockup at http://12q5wx.axshare.com/main_page_simple.html

## Installation

1. Clone the repository
`git clone git@github.com:lauralindal/dein-semesterplaner.git`
2. Install all the necessary modules and such
`npm install`
3. Start the App
`npm start`

## Glossary

| Term                   | Description                                                                                                                                                                                                              |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| course                 | A course is a part of a module. A module consists of at least one course. It has a specific course format.                                                                                                               |
| course format          | Every course has a specific format such as a lecture, a practice session etc. Seminaristischer Lehrvortrag (SL), Begleitübung (BÜ), Projektseminar(PS), Praktische Übung (PÜ), PC-Übung (PCÜ) or Laborpraktikum (LPr). |
| course interval        | Describes how often a course meets: Weekly, biweekly or in a workshop format.                                                                                                                                            |
| credit points          | European standard to describe the average student workload of a module/course.                                                                                                                                           |
| current credit points  | Credit points of the currently selected courses for the upcoming semester.                                                                                                                                               |
| date of enrolment      | The date the student enrolled at university to start his degree program.                                                                                                                                                 |
| degree credit points   | Credit points needed for the completion of the degree program.                                                                                                                                                           |
| module                 | A module is a study unit set by the degree program’s study regulations. A module is comprised of at least one course.                                                                                                    |
| module description     | Description of the content taught in this particular module.                                                                                                                                                             |
| module frequency       | Describes how often a module is offered within the academic year: Once every semester or only every other semester.                                                                                                      |
| module prerequisites   | Some modules can only be taken under the condition that another specific module (or modules) has already been completed.                                                                                                 |
| repetition period      | Period in which a started module needs to be completed to stay in the degree program.                                                                                                                                    |
| status (module)        | A module can have one of these 5 statuses: available, selected, started, urgent or completed.                                                                                                                            |
| status_available(blue) | Module is available for selection in the current semester.                                                                                                                                                               |
| status_completed(grey) | Module has been taken in a previous semester and was successfully completed.                                                                                                                                             |
| status_selected(green) | Module has been selected for the current semester.                                                                                                                                                                       |
| status_started(yellow) | Module has been taken in a previous semester, but necessary requirements for completion have not been satisfied.                                                                                                         |
| status_urgent(red)     | Started module needs to be completed this semester as to comply with the repetition period.                                                                                                                              |
| total credit points    | Credit points that the student has accumulated with previously completed modules.                                                                                                                                        |
                                                                                                                                                                                                                         |
## Terminology for html and components (Work-in-progress)

| Term            | Description                                                                                                                    | Abbreviation |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------|--------------|
| course schedule | All sections of selected courses for the current semester displayed in a weekly calendar format.                               |              |
| current credits | Graphic display of current credits (Explanation see above).                                                                    |              |
| legend          | Graphic explanation of the course statuses.                                                                                    |              |
| module plan     | Graphic representation of all module requirements in the degree program sorted by semester.                                    |              |
| module pool     | Graphic representation of selected modules for the current semester. Course are dragged from the module plan and dropped here. |              |
| total credits   | Graphic display of total credits (Explantation see above)                                                                      |              |

