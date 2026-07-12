import { useState, useEffect } from 'react';

export function useProfileData() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch from PHP API
        fetch('http://localhost/MY_PORTFOLIO/api/profile/')
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch profile data");
                return res.json();
            })
            .then(data => {
                if (data.status === 'success') {
                    setProfile(data.data);
                } else {
                    throw new Error("Invalid response structure");
                }
            })
            .catch(err => {
                console.error("Error fetching profile:", err);
                setError(err.message);
            })
            .finally(() => setLoading(false));
    }, []);

    return { profile, loading, error };
}
