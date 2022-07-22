import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert, selectAlert } from '../../app/alertSlice';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const AlertItem = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Alert() {
    const dispatch = useDispatch();
    const alert = useSelector(selectAlert);

    const alertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(closeAlert());
    };

    return (
        <Snackbar open={alert.isOpen} autoHideDuration={6000} onClose={alertClose}>
            <AlertItem onClose={alertClose} severity={alert.type} sx={{ width: '100%' }}>
                {alert.message}
            </AlertItem>
        </Snackbar>
    );
}