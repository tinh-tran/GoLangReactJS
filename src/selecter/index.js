function getClassList(courseInfo) {
  let data = []
  for (let k in courseInfo) {
    let obj = {}
    obj.title = k
    obj.contain = []

    for (let j in courseInfo[k]) {
      let objcontain = {}
      objcontain.title = j
      objcontain.sectionvideo = courseInfo[k][j].sectionvideo
      objcontain.sectionpdf = courseInfo[k][j].sectionpdf
      objcontain.classsectionid = courseInfo[k][j].classsectionid
      obj.contain.push(objcontain)
    }
    data.push(obj)
  }
  return data
}

export const getCourseInfo = (classchapter, classsection) => {
  let obj = {}
  for (let i = 0; i < classchapter.length; i++) {
    obj[classchapter[i].chaptername] = {}
    for (let j = 0; j < classsection.length; j++) {
      if (classsection[j].chapterid === classchapter[i].chapterid) {
        obj[classchapter[i].chaptername][classsection[j].sectionname] = {
          sectionorder: classsection[j].sectionorder,
          sectionvideo: classsection[j].sectionvideo,
          sectionpdf: classsection[j].sectionpdf,
          classsectionid: classsection[j].classsectionid
        }
      }
    }
  }
  return getClassList(obj)
}
