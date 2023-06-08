
<template>
 <div class="attendanceContainer" v-for="(att, index) in attendance" :key="att.date" style="background-color: white;">
    <div class="attendanceHeader">
      <h2>Lista del día {{ att.date }}</h2>
    </div>
    <div class="attendanceBody">
      <div class="tableContainer">
        <table class="attendanceTable">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(atd, index) in att.attendants" :key="atd.uuid">
              <td>{{ atd.name }}</td>
              <td>{{ atd.time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  

</template>

<style>



.attendanceContainer {
  margin-bottom: 20px;
}

.attendanceHeader {
  background-color: #ffffff;
  padding: 10px;
}

.attendanceBody {
  max-height: 300px; /* Ajusta la altura máxima deseada */
  overflow-y: auto;
}

.tableContainer {
  overflow-x: auto;
}

.attendanceTable {
  width: 100%;
  border-collapse: collapse;
  
}

.attendanceTable th,
.attendanceTable td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid black;
  background-color: white;
  
  
}

.attendanceTable th {
  background-color: #f2f2f2; 
}

</style>


<script>
import { getAttendance } from '../firebase/manageReports.js';

export default {
    data() {
        return {
            attendance: [],
        }
    },
    async mounted() {
        this.attendance = await getAttendance();

        console.log("this.attendance: ", this.attendance)
    }

}
</script>

