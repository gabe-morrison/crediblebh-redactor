const clientNames = [
  ['','']
]

const redactAll = () => {
  clientNames.forEach((client)=>{
    redact(client[0],client[1]);
  })
}

const redact = (firstName,lastName) => {
  const list = document.querySelectorAll('a, td, .Answer');
  const regex = new RegExp(`(?<![A-Za-z])${firstName}(?![A-Za-z])|(?<![A-Za-z])${lastName}(?![A-Za-z])`);
  const insuranceRegex = new RegExp("UCARE|MHCP|UBH|HP\s[0-9]|HP :");
  list.forEach((el)=>{
    el.childNodes.forEach((node)=>{    
      if (node.nodeType === 3 && node.data.includes(firstName || lastName)) {
        node.data = node.data.replaceAll(regex,'[redacted]');
      } else if (node.nodeType === 3 && insuranceRegex.test(node.data)) {        
        node.data = "[redacted]";
      }
    })
  })
}

redactAll()
