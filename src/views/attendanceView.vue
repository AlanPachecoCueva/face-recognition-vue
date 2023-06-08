<template>
    <div class="attendanceContainer" v-for="(att, index) in attendance" :key="att.date">
        <div class="attendanceHeader">
            <h2>Lista del día {{ att.date }}</h2>
        </div>
        <div class="attendanceBody">
            <div class="attendance" v-for="(atd, index) in att.attendants" :key="atd.uuid">
                <h3>{{ atd.name }} </h3>
                <p>{{ atd.time }} </p>
            </div>
        </div>
    </div>
</template>

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

<style></style>