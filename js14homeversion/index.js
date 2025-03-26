"use strict";

// 1
let spisok = ['chto', 'ara', 'one'];
let elem = document.getElementById('elem');
for (let i=0; i<spisok.length; i++) {
	let li = document.createElement('li');
	li.textContent = spisok[i];
	elem.appendChild(li)
}
// 2
let newli = document.getElementsByTagName('li');
for (let i=0; i<spisok.length; i++) {
	newli[i].onclick = function() {
		event.currentTarget.textContent = spisok[i];
		alert(spisok[i])
	}
}
// 3 4
let tab = document.getElementById('tab');
for (let i=0; i<5; i++) {
	let tr = document.createElement('tr');
	for (let i=0; i<5; i++) {
		let td = document.createElement('td');
		td.textContent = 'x'
		tr.appendChild(td)
	}
	tab.appendChild(tr)
}
// 5
let tabl = document.getElementById('tabl');
let n = 1;
for (let i=0; i<5; i++) {
	let tr = document.createElement('tr');
	for (let i=0; i<5; i++) {
		let td = document.createElement('td');
		td.textContent = n
		n++
		tr.appendChild(td)
	}
	tabl.appendChild(tr)
}
// 6
let tabl2 = document.getElementById('tabl2');
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
for (let i = 0; i < arr.length; i++) {
	let r = tabl2.insertRow();
	for (let j = 0; j < arr[i].length; j++) {
		let c = r.insertCell();
		c.textContent = arr[i][j];
	}
}
// 7
let tb = document.getElementById('tabl3').getElementsByTagName('tbody')[0];
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
  ];
employees.forEach(employee => {
	let r = tb.insertRow();

	let nc = r.insertCell();
	nc.textContent = employee.name;

	let ac = r.insertCell();
	ac.textContent = employee.age;

	let sc = r.insertCell();
	sc.textContent = employee.salary;
});
// 8
let but = document.getElementById('but');
let nt = document.getElementById('nt');

but.onclick = function() {
  let cc = nt.getElementsByTagName('td');
  for (let i = 0; i < cc.length; i++) {
	let c = cc[i];
	let cV = parseFloat(c.textContent);
	if (!isNaN(cV)) {
	  c.textContent = cV * 2;
	}
  }
};
// 9
let parent = document.getElementById('parent');
let button = document.getElementById('button');
let vodch = 4;
  
function addListItem() {
	let nL = document.createElement('li');
	nL.textContent = vodch
	vodch++
	parent.appendChild(nL)
	nL.addEventListener('click', removeListItem)
}
  
function removeListItem(event) {
	let listItem = event.target;
	listItem.remove()
}
  
button.addEventListener('click', addListItem);
  
let eL = parent.querySelectorAll('li');
eL.forEach(item => {
	item.addEventListener('click', removeListItem)
});
// 10
document.addEventListener('DOMContentLoaded', function() {
	let list = document.getElementById('myList');
	
	list.querySelectorAll('li').forEach(li => {
	  const removeLink = document.createElement('a');
	  removeLink.textContent = ' [Удалить]';
	  removeLink.style.cursor = 'pointer';
	  removeLink.onclick = function() {
		li.remove();
	  };
	  li.appendChild(removeLink);
	});
  });
// 11
document.addEventListener('DOMContentLoaded', function() {
	let list = document.getElementById('editableList');
	
	list.querySelectorAll('li').forEach(li => {
	  li.addEventListener('click', function() {
		let input = document.createElement('input');
		input.value = li.textContent;
		li.innerHTML = '';
		li.appendChild(input);
		
		input.addEventListener('blur', function() {
		  li.textContent = input.value;
		  li.addEventListener('click', arguments.callee);
		});
		
		input.focus();
	  });
	});
  });
// 12 13
document.addEventListener('DOMContentLoaded', function() {
	let parente = document.getElementById('parente');
  
	parente.querySelectorAll('p').forEach(p => {
	  let deleteLink = document.createElement('a');
	  deleteLink.textContent = ' [Удалить]';
	  deleteLink.style.cursor = 'pointer';
	  deleteLink.onclick = function() {
		p.remove();
	  };
	  p.appendChild(deleteLink);
	});
  
	parente.querySelectorAll('span').forEach(span => {
	  span.addEventListener('click', function() {
		let input = document.createElement('input');
		input.value = span.textContent;
		span.innerHTML = '';
		span.appendChild(input);
  
		input.addEventListener('blur', function() {
		  span.textContent = input.value;
		  span.addEventListener('click', arguments.callee);
		});
  
		input.focus();
	  });
	});
  });
document.addEventListener('DOMContentLoaded', function() {
	let paragraphs = document.querySelectorAll('p');
	
	paragraphs.forEach(p => {
	  let span = document.createElement('span');
	  span.textContent = p.textContent;
	  p.innerHTML = '';
	  p.appendChild(span);
	  
	  let link = document.createElement('a');
	  link.href = '#';
	  link.textContent = ' [Перечеркнуть]';
	  link.style.cursor = 'pointer';
	  p.appendChild(link);
	  
	  link.addEventListener('click', function(e) {
		e.preventDefault();
		span.classList.toggle('strikethrough');
	  });
	});
  });
// 14
document.addEventListener('DOMContentLoaded', function() {
	let listl = document.getElementById('myListl');
	
	listl.addEventListener('click', function(e) {
	  if (e.target.tagName === 'LI') {
		e.target.classList.toggle('active');
	  }
	});
  });
// 15
function appendText(selector, text) {
	document.querySelectorAll(selector).forEach(element => {
	  element.textContent += text;
	});
  }
// appendText('div', ' [Добавлено ко всем div]');
// 16
// document.addEventListener('DOMContentLoaded', function() {
// 	document.querySelectorAll('p').forEach(p => {
// 	  p.textContent += '!';
// 	});
//   });
// 17
// document.addEventListener('DOMContentLoaded', function() {
// 	document.querySelectorAll('p').forEach((p, index) => {
// 	  p.textContent = `${index + 1}. ${p.textContent}`;
// 	});
//   });
// 18
function appendText(element, text) {
	if (!(element instanceof Element)) {
	  throw new Error('Первый параметр должен быть DOM-элементом');
	}
	
	if (typeof text !== 'string') {
	  throw new Error('Второй параметр должен быть строкой');
	}
	
	element.textContent += text;
  }
  document.addEventListener('DOMContentLoaded', function() {
	let paragraph = document.getElementById('myParagraph');
	appendText(paragraph, ' [Добавлено через функцию]');
  });
// 19
function appendElem(container, text) {
	if (!(container instanceof Element)) {
	  throw new Error('Первый параметр должен быть DOM-элементом');
	}
	
	let ul = container.querySelector('ul');
	if (!ul) {
	  throw new Error('В контейнере не найден элемент ul');
	}
	
	if (typeof text !== 'string') {
	  throw new Error('Второй параметр должен быть строкой');
	}
	
	let li = document.createElement('li');
	li.textContent = text;
	ul.appendChild(li);
  }
  document.addEventListener('DOMContentLoaded', function() {
	let container = document.getElementById('myContainer');
	appendElem(container, 'Новый пункт');
  });
// 20
function createTable(rows, cols) {
	let table = document.createElement('table');
	let tbody = document.createElement('tbody');
  
	for (let i = 0; i < rows; i++) {
	  let row = document.createElement('tr');
	  for (let j = 0; j < cols; j++) {
		let cell = document.createElement('td');
		cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
		row.appendChild(cell);
	  }
	  tbody.appendChild(row);
	}
  
	table.appendChild(tbody);
	table.setAttribute('border', '1');
	return table;
  }
  
  document.addEventListener('DOMContentLoaded', function () {
	let elemf = document.getElementById('elemf');
	let table = createTable(3, 3); 
	elemf.appendChild(table);
  });