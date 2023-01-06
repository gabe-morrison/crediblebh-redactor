const clientNames = [
  ['',''],
  ['',''],
  ['',''],
  ['',''],
  ['',''],
  ['',''],
  ['',''],
  ['',''],
  ['',''],
  ['',''],
]

const redactAll = () => {
  clientNames.forEach((client)=>{
    redact(client[0],client[1]);
  })
}

const redact = (firstName,lastName) => {
  const list = document.querySelectorAll('a, td, .Answer');
  const regex = new RegExp(`${firstName}(?!h)|${lastName}`);
  list.forEach((el)=>{
    el.childNodes.forEach((node)=>{    
      if (node.nodeType === 3 && node.data.includes(firstName || lastName)) {
        node.data = node.data.replaceAll(regex,'[redacted]');
      }    
    })
  })
}
