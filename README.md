<h1>Deliverest</h1>
<p>Вёрстка нового дизайна deliverest.</p>
<h2>Установка:</h2>
<ol>
<li>Клонируем репозиторий</li>
<li>Запускаем npm install</li>
<li>Сборка запускается командой gulp</li>
</ol>
<h2>Общая структура:</h2>
<ol>
<li>dist/ - Билд для сборки</li>
<li>src/media/ - исходные изображения</li>
<li>src/styles/ - исходный scss</li>
<li>src/views/ - исходные html-страницы</li>
</ol>

<h2>Структура scss - файлов:</h2>
<pre>
main.scss
|
|– base/ 
|   |– _normalize.scss
|   |– _scaffolding.scss
|   |...
|   // Базовые стили всего проекта
|
|– helpers/ 
|   |– _variables.scss 
|   |– _mixins.scss    
|   ...                
|   // Файлы для препроцессора не компилируемые в css
|   
|– layout/ 
|   |– _header.scss
|   |...
|   // Структурные блоки повторяющиеся на всех страницах или часто
|                     
|– modules/ 
|   |– _article.scss  
|   |– _button.scss 
|   |– _comment.scss 
|   ...
|   // Переиспользуемые блоки             
| 
|– pages/ 
|   |– _home.scss 
|   ...                  
|   // Стили отдельных страниц
|
|– plugins/ 
|   
|     
|   ...                
|   // Стили подключаемых плагинов
|   
</pre>

<h2>Todo:</h2>
<ol>
<li>...</li>
</ol>
<br>
