import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons({variant, color, content}) {
    return (
            <Button variant={variant} color={color}>
                {content}
            </Button>
    );
}