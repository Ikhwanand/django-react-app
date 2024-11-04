import axios from "axios";

export function getPatients() {
    return axios.get('http://127.0.0.1:8000/patients/')
        .then(res => res.data);
}

export function deletePatient(id) {
    return axios.delete('http://127.0.0.1:8000/patients/' + id + '/')
        .then(res => res.data);
}