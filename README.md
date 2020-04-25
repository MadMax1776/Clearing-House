# Clearing-House
Buying and Selling Precious Metals



<form ng-submit="ctrl.createGold()">
   <!-- enables it to see what is inside the controller -->
   <input type="text"
   placeholder="Gold Type"
   ng-model="ctrl.createForm.type"/>
   <input type="submit" value="Create New Gold Item" />
   <!-- ng model tells the form that everything that changes in js changes in form and vice versa; two way data binding -->
 </form>
 <table>
   <tr ng-repeat="gold in ctrl.gold">
     <td> {{ gold.type }} money</td>
   </tr>
</table>
