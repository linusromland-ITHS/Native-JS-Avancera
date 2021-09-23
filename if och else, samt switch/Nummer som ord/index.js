const input = prompt("gimmme number plz");
let output;

switch (parseInt(input)) {
  case 1:
    output = "ett";
    break;
  case 2:
    output = "två";
    break;
  case 3:
    output = "tre";
    break;
  case 4:
    output = "fyra";
    break;
  case 5:
    output = "fem";
    break;
  case 6:
    output = "sex";
    break;
  case 7:
    output = "sju";
    break;
  case 8:
    output = "åtta";
    break;
  case 9:
    output = "nio";
    break;
  case 10:
    output = "tio";
    break;
  case 11:
    output = "elva";
    break;
  case 12:
    output = "tolv";
    break;

  default:
      output = input;
    break;
}

alert(output);
