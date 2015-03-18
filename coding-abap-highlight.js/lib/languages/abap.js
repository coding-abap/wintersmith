module.exports = function(hljs) {
  var KEYWORDS = {
    keyword: ''
  };
  
  var multiword = {
    className: 'multiword',
    lexemes: '[a-z-]+',
    beginKeywords: 'add-corresponding authority-check bit-and bit-not bit-or bit-xor break-point class-data class-events class-methods class-pool divide-corresponding editor-call end-of-definition end-of-page end-of-selection exit-command field-groups field-symbols function-pool help-id help-request interface-pool left-justified line-count line-selection line-size list-processing load-of-program message-id move-corresponding multiply-corresponding new-line new-page no-gaps no-gap no-heading non-unique no-scrolling no-sign no-title no-zero output-length pf-status print-control right-justified scroll-boundary selection-screen selection-table select-options start-of-selection subtract-corresponding syntax-check syntax-trace system-call system-exceptions top-of-page type-pools type-pool user-command value-request with-title',
	relevance: 10
  };
  
  var operator = {
    className: 'operator',
    begin: /\b(between|bound|ca|cn|co|cp|cs|eq|ge|gt|in|is|le|lt|na|ne|not|np|ns|initial|null|space)\b(?!(\s*=|\(|\s*like|\s*type))/,
	keywords: 'between bound ca cn co cp cs eq ge gt in is le lt na ne not np ns initial null space'
  };
  
  var simple = {
    className: 'simple',
    begin: /\b(add|adjacent|after|aliases|all|analyzer|and|any|append|appending|as|ascending|assign|assigned|assigning|at|avg|back|before|begin|binary|bit|blank|block|buffer|by|call|case|catch|centered|clear|client|close|cnt|code|collect|color|comment|commit|communication|comparing|compute|concatenate|condense|constants|context|contexts|continue|control|controls|conversion|convert|copy|corresponding|country|create|currency|cursor|data|database|dataset|decimals|default|define|definition|delete|delete|demand|descending|describe|dialog|distinct|div|divide|do|duplicates|dynpro|edit|else|elseif|encoding|end|endat|endcase|endcatch|enddo|endexec|endchain|endif|ending|endinterface|endloop|endon|endprovide|endselect|endtry|endwhile|entries|errors|event|events|exceptions|exec|exit|excluding|exponent|export|exporting|extended|extract|fetch|field|fields|first|for|format|frame|free|from|function|generate|get|group|handler|hashed|header|heading|hide|hotspot|chain|change|changing|check|checkbox|icon|id|if|ignoring|implementation|import|importing|include|index|infotypes|initialization|inner|input|insert|intensified|interface|interfaces|intervals|into|inverse|join|key|language|last|leave|left|length|like|line|lines|listbox|load|local|locale|loop|lower|margin|mask|matchcode|memory|message|messages|methods|mod|mode|modif|modify|move|multiply|new|next|no|nodes|number|object|obligatory|occurs|occurrences|of|off|on|open|or|order|outer|output|overlay|pack|page|parameter|parameters|position|print|private|process|program|property|protected|provide|public|put|radiobutton|raise|raising|range|ranges|read|receive|receiving|ref|refresh|reject|replace|report|requested|reserve|reset|result|return|rollback|rows|rtti|run|scan|screen|scroll|search|search|seconds|select|section|separated|set|shared|shift|single|size|skip|sort|sorted|source|split|sql|stable|stamp|standard|starting|statics|stop|string|structure|submit|subtract|sum|supplied|supply|suppress|symbol|tab|tabbed|table|table_line|tables|text|textpool|time|times|title|titlebar|to|transaction|transfer|translate|transporting|transformation|try|type|types|uline|unassign|under|unique|unit|unpack|up|update|upper|using|value|values|vary|wait|when|where|while|window|visible|with|work|write|xstring|zone)\b(?!(\s*=|\(|\s*like|\s*type))/,
	keywords: 'add adjacent after aliases all analyzer and any append appending as ascending assign assigned assigning at avg back before begin binary bit blank block buffer by call case catch centered clear client close cnt code collect color comment commit communication comparing compute concatenate condense constants context contexts continue control controls conversion convert copy corresponding country create currency cursor data database dataset decimals default define definition delete delete demand descending describe dialog distinct div divide do duplicates dynpro edit else elseif encoding end endat endcase endcatch enddo endexec endchain endif ending endinterface endloop endon endprovide endselect endtry endwhile entries errors event events exceptions exec exit excluding exponent export exporting extended extract fetch field fields first for format frame free from function generate get group handler hashed header heading hide hotspot chain change changing check checkbox icon id if ignoring implementation import importing include index infotypes initialization inner input insert intensified interface interfaces intervals into inverse join key language last leave left length like line lines listbox load local locale loop lower margin mask matchcode memory message messages methods mod mode modif modify move multiply new next no nodes number object obligatory occurs occurrences of off on open or order outer output overlay pack page parameter parameters position print private process program property protected provide public put radiobutton raise raising range ranges read receive receiving ref refresh reject replace report requested reserve reset result return rollback rows rtti run scan screen scroll search search seconds select section separated set shared shift single size skip sort sorted source split sql stable stamp standard starting statics stop string structure submit subtract sum supplied supply suppress symbol tab tabbed table table_line tables text textpool time times title titlebar to transaction transfer translate transporting transformation try type types uline unassign under unique unit unpack up update upper using value values vary wait when where while window visible with work write xstring zone'
  };
  
  var LINE_COMMENT_MODE = {
    className: 'comment',
    variants: [
      {begin: '^\\*', end: '$', relevance: 0},
      {begin: '"', end: '$'}
    ]
  };
  
  var GRAVE_ACENT_STRING = {
    className: 'string',
    begin: '`', end: '`',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  
  var NUMBER = {
    className: 'number',
	begin: /\b((0(x|X)[0-9a-fA-F]+)|([0-9]+(\.[0-9]+)?))\b/
  };
  
  var BASIC_TYPE = {
    className: 'type',
	begin: /\b(type)\b\s+\b(c|d|f|i|n|p|t|x)\b/
  };

  return {
    case_insensitive: true,
    keywords: KEYWORDS,
    contains: [
      LINE_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      GRAVE_ACENT_STRING,
	  NUMBER,
	  BASIC_TYPE,
	  multiword,
	  operator,
	  simple
    ]
  };
};